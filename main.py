from re import search
from flask import Flask
from flask import render_template
from requests import get
from bs4 import BeautifulSoup
from flask import request
from flask import jsonify

app = Flask(__name__)
app.jinja_env.filters['zip'] = zip  # zip(for loop) setting for jinja2

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/serials/<int:count>")
def serials(count):    
    html = get("https://www.kinonews.ru/serial_top100/")
    html.encoding = html.apparent_encoding
    html = html.text
    soup = BeautifulSoup(html, 'html.parser')
    serials_names = soup.find_all("a", {"class": "titlefilm"})
    serials_names = list(map(lambda el: el.text, serials_names))
    ratings_list = soup.find_all("span", {'class': "rating-big"})
    ratings_list = list(map(lambda el: el.text, ratings_list))


    return render_template("serials.html", top_serials=serials_names[:count], ratings_list=ratings_list)


@app.route("/movies/<int:count>")
def movies(count):    
    html = get("https://www.kinonews.ru/top100/")
    html.encoding = html.apparent_encoding
    html = html.text
    soup = BeautifulSoup(html, 'html.parser')
    movies_names = soup.find_all("a", {"class": "titlefilm"})
    movies_names = list(map(lambda el: el.text, movies_names))
    ratings_list = soup.find_all("span", {'class': "rating-big"})
    ratings_list = list(map(lambda el: el.text, ratings_list))


    return render_template("movies.html", top_movies=movies_names[:count], ratings_list=ratings_list)

@app.route("/randomnames/<int:count>")
def kek(count):
    from faker import Faker
    fake = Faker()
    random_list = [fake.name() for i in range(20)]
    return render_template("randomnames.html", random_list=random_list, rows=count)


@app.route("/wikiexist")
def wiki_exist():
    find = request.args.get("search")
    if not find:
        return render_template("wikiexist.html", title="Does it exist on WIKI?")
    else:
        url = f"https://en.wikipedia.org/wiki/{find}"
        wiki_html = get(url)
        try_find = search('Wikipedia does not have an article with this exact name.', wiki_html.text)
        good_answer = f"""Yes, this exists: """
        bad_answer = f"""No, this does not exist."""
        if not try_find:
            return render_template("wikiexist.html", title="Does it exist on WIKI?", finded=good_answer, url=url)
        else:
            return render_template("wikiexist.html", title="Does it exist on WIKI?", finded=bad_answer)

@app.route("/get_my_ip")
def get_my_ip():
    return render_template("get_my_ip.html", title="Your IP", ip=request.environ['REMOTE_ADDR'])


@app.route("/set_wallpaper")
def set_wall():
    return render_template("setwall.html", title="Set wallpaper")        


@app.route("/somejs")
def some_js():
    return render_template("somejs.html", title="Some JS")   


@app.route("/hiden/moving_block")
def moving_block():
    return render_template("moving_block.html", title="Moving block")   

        



@app.errorhandler(404)
def error_404(error):
    return render_template("404.html")


if __name__ == "__main__":
    app.run("0.0.0.0", 8888)

    
