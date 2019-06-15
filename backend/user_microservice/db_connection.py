import pymongo

def database_connection():
    try:
        _client = pymongo.MongoClient("mongodb://localhost:27017/")
        _db = _client["hotel_smart_service"]
        print ("Connecting database...")
        print ("Connected!")
        return _db
    except:
        print ("Coudn't connect to database")