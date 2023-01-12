curl -X GET "http://localhost:8080/newUser?username=jose&password=1234"

artillery quick --count 10 -n 50 "http://localhost:8080/auth-bloq?username=jose&password=1234" > result_bloq.txt

