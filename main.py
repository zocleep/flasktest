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

@app.route("/contact")
def contact():
    return render_template("contact.html", title="Contact Us")

@app.route("/location")
def location():
    return render_template("location.html", title="Our Location")
    
@app.route("/services")
def services():
    return render_template("services.html", title="Services")

@app.route("/about")
def about():
    return render_template("about.html", title="About Us")

   



@app.errorhandler(404)
def error_404(error):
    return render_template("404.html")


if __name__ == "__main__":
    app.run("0.0.0.0", 8888)

    
