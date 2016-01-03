function route(handle,pathname){
    console.log("About to route a request for " + pathname);
    //console.log("");
    console.log("typeof:"+ typeof handle[pathname]);
    if (typeof handle[pathname] == 'function') {
        return handle[pathname]();
        //return "function action!!";
    }
    else {
        console.log("No request handler found for " + pathname);
        return "Page404!";
    }
}

exports.route = route;