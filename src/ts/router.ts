// Handles SPA routing

const pageTitle = "Jenny L."

const routes: any = {
    404: {
        template: "/pages/404.html",
        title: pageTitle + " | 404",
        description: "Page not found"
    },
    "/": {
        template: "/pages/index.html",
        title: pageTitle,
        description: "This is the homepage"
    },
    about: {
        template: "/pages/about.html",
        title: pageTitle + " | About",
        description: "About me"
    },
}

export const hashRoute = (event?: any) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    locationHandler();
}

export const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");
    if (location.length == 0) {
        location = "/";
    }
    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response) =>
        response.text());
    document.getElementById("content").innerHTML = html; 
    document.title = route.title;
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
}

locationHandler();
