from flask import Flask
from flask import request
import json

api = Flask(__name__)

@api.route('/AI/job-scan', methods=["POST"])
def my_package():
    if request.method == "POST":
        print(json. request.data)
    # Here, you can call your Python package and return the results
    return {'result': 'Hello from my Python package!'}