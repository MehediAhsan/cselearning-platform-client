import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-accent mt-20 mb-10'>Q/A</h1>
            <div className="grid grid-cols-1 w-full md:w-9/12 mx-auto">
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">what is cors?</h3>
                    <p className="text-gray-500 text-lg ml-8">CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application. .</p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className="text-gray-500 text-lg ml-8">Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Other options for implement authentication are :STYTCH,Ory,Supabase,Okta,PingIdentity,Keycloak,Frontegg,Authress.</p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">How does the private route work?</h3>
                    <p className="text-gray-500 text-lg ml-8"> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).  </p>
                </div>
                <div className="p-7 lg:p-10">
                    <h3 className="text-2xl font-semibold mb-4">What is Node? How does Node work?</h3>
                    <p className="text-gray-500 text-lg ml-8"> Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.  </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;