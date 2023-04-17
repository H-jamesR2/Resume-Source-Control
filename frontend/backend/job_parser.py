from flask import Flask
from flask import request
import json
import spacy

nerClassifier = spacy.load("model-best")
api = Flask(__name__)

@api.route('/AI/job-scan', methods=["GET", "POST"])
def my_package():
    jobDescription = request.form.get('jobDescription')
    doc = nerClassifier(jobDescription)

    entities = [{'word': ent.text, 'label': ent.label_} 
                for ent in doc.ents]
    
    id = 0
    for ent in entities:
        ent['id'] = id
        id += 1

    return {'entities': entities}