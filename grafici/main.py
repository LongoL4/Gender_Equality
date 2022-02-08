from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

# Stringa di connessione al DB
app.config["MONGO_URI"] = "mongodb+srv://SiempreArriba:Romeo333@cluster0.xjq4g.mongodb.net/WBLGlobale?retryWrites=true&w=majority" #Importante qui va specificato il nome del DB

mongo = PyMongo(app)
# Per rispondere alle chiamate cross origin
CORS(app)

# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"

# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/economy', methods=['GET'])
def get_all_addresses():
    print("ciao")
    WBL = mongo.db.WBL2021

    output = []
    
    for s in WBL.find():
        output.append(
            {
                'economy': s['economy'],
                'WBL_INDEX': s['WBL INDEX']
            }
        )
    return jsonify({'result': output})

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()