import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  State createState() => new LoginPageState();
}

class LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      backgroundColor: Colors.black,
      body: new Stack(fit: StackFit.expand, children: <Widget>[
        new Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              new Image(
                image: new AssetImage("assets/plentysLogo.png"),
                width: 200.0,
                height: 200.0,
              ),
              new Form(
                  child: new Theme(
                data: new ThemeData(
                    brightness: Brightness.dark,
                    primarySwatch: Colors.teal,
                    inputDecorationTheme: new InputDecorationTheme(
                        labelStyle:
                            new TextStyle(color: Colors.teal, fontSize: 20.0))),
                child: new Container(
                  padding: const EdgeInsets.all(40.0),
                  child: new Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        new TextFormField(
                          decoration: new InputDecoration(
                            labelText: "Id",
                          ),
                          keyboardType: TextInputType.number,
                        ),
                        new TextFormField(
                          decoration: new InputDecoration(
                            labelText: "Password",
                          ),
                          keyboardType: TextInputType.text,
                          validator: (input) => input.length < 5
                              ? "Password should be more than 5 characters"
                              : null,
                          obscureText: true,
                        ),
                        new Padding(
                          padding: const EdgeInsets.only(top: 40.0),
                        ),
                        new MaterialButton(
                          height: 40.0,
                          minWidth: 100.0,
                          color: Colors.teal,
                          textColor: Colors.white,
                          child: new Text("Login"),
                          onPressed: () => {},
                          splashColor: Colors.redAccent,
                        )
                      ]),
                ),
              ))
            ])
      ]),
    ); // Scaffold
  }
}
