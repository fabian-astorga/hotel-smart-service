from flask import Flask, jsonify, request
from db_connection import *

app = Flask(__name__)
app.debug = True
_database = database_connection() 

def get_user(pusername, ppassword):
    _user = _database["user"].find_one({"username":pusername, "password": ppassword})
    if _user is None:
        return
    else:
        if '_id' in _user: 
            del _user['_id'] 
            return _user

def insert_document(data, pcollection):
    return _database[pcollection].insert_one(data)


def get_reservations(pusername):
    try:
        _reservations = _database["reservation"].find({"owner":pusername})
        reservation_list = []
        for document in _reservations:
            if '_id' in document: 
                del document['_id'] 
            reservation_list.append( document )
        return reservation_list
    except:
        empty = []
        return empty

# ----------------------------------------------------------------------------- #
@app.route("/users", methods=['POST'])
def index():
    user_json = request.get_json(force=True)
    user = get_user(user_json["username"], user_json["password"])
    if user is None:
        return jsonify( {"response": user, "status":500} )
    else:
        return jsonify( {"response": user, "status":200} )

@app.route("/register", methods=['POST'])
def index2():
    register_json = request.get_json(force=True)
    data = {
            "name":register_json["name"],
            "lastname":register_json["lastname"],
            "telephone":register_json["telephone"],
            "email":register_json["email"],
            "username":register_json["username"],
            "password":register_json["password"]
}
    x = insert_document( data, "user")
    return jsonify( {"status":200} )


@app.route("/reservation/create", methods=['POST'])
def index3():
    reservation_json = request.get_json(force=True)
    data = {
            "owner":reservation_json["owner"],
            "start_date":reservation_json["start_date"],
            "final_date":reservation_json["final_date"],
            "hotel":reservation_json["hotel"],
            "amount":reservation_json["amount"],
            "status":reservation_json["status"],
            "amount_people":reservation_json["amount_people"]
    }
    x = insert_document( data, "reservation")
    return jsonify( {"status":200} )

@app.route("/reservations", methods=['POST'])
def index4():
    username_json = request.get_json(force=True)
    reservations = get_reservations(username_json["owner"])
    return jsonify( {"response": reservations, "status":200} )

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)