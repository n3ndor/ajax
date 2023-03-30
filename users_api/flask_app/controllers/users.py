from flask_app.models.user import User
from flask_app import app
import os
from flask import render_template, jsonify, request, redirect

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users')
def users():
    return jsonify(User.get_all_json())

@app.route('/create/user', methods=['POST'])
def create_user():
    print(request.form)
    user_data = {
        "user_name" : request.form["user_name"],
        "email" : request.form["email"]
    }
    User.save(user_data)
    return jsonify(User.get_all_json())

@app.route('/searching', methods=['POST'])
def search():
    print(request.form['query'])
    # now we inject the query into our string
    r = requests.get(f"https:api.information.com/{os.environ.get('FLASK_API_KEY')}/search?={request.form['query']}")
    # we must keep in line with JSON format.
    # requests has a method to convert the data coming back into JSON.
    return jsonify( r.json() )

