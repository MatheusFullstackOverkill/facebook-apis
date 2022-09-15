from crypt import methods
import json
from flask import Flask, request, Response

app = Flask(__name__)

@app.route('/api/hook', methods=['GET', 'POST'])
def webhook():
    print(request)
    try:
        print(request.get_json())
    except Exception as e:
        print(e)
    return Response(response={'message': '1836548521'}, status=200)