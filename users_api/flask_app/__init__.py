from flask import Flask
from flask_cors import CORS
import os
print( os.environ.get("FLASK_APP_API_KEY") )

app = Flask(__name__)
CORS(app)
app.secret_key = "There are no secrets between us."