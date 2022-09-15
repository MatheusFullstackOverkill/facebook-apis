from crypt import methods
import json
from flask import Flask, request, Response

app = Flask(__name__)

@app.route('/webhook', methods=['GET', 'POST'])
def webhook():
    print(request)
    try:
        print(request.get_json())
    except Exception as e:
        print(e)
    return Response(response={'message': 'success'}, status=200)