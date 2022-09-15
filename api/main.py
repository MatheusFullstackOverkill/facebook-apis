import json
from flask import Flask, request, Response

app = Flask(__name__)

@app.route('/api/hook', methods=['GET', 'POST'])
def webhook():
    print(request)
    challenge = request.args.get('hub.challenge')
    if not challenge:
        challenge = "response"
    try:
        print(request.get_json())
        file = open('logs.txt', 'a')
        file.write('----------------------------------\n')
        file.write(json.dumps(request.get_json())+'\n')
    except Exception as e:
        pass
    return Response(response={challenge}, status=200, mimetype='text/plain')
