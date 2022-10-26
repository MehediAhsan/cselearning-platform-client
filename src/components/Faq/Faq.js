import React from 'react';

const Faq = () => {
    return (
        <section className="dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl mb-16 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is Computer Programming?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">A computer program consists of code that is executed on a computer to perform particular tasks. This code is written by programmers.Programming is the process of giving machines a set of instructions that describe how a program should be carried out. Programmers will spend their whole careers learning a variety of programming languages and tools so they can effectively build computer programs.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why Data Structures and Algorithms Are Important to Learn?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">Good knowledge of programming languages is necessary but not sufficient. The real joy comes from having a good command of problem-solving strategies in DSA.Consistent practice and exploring real-life applications can change the way we think about the importance of algorithms. After five years of teaching experience with thousands of students and professionals, I am sharing four good reasons to learn Data structure and Algorithms.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is computer networking?How does a computer network work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-500">Computer networking refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.Nodes and links are the basic building blocks in computer networking. A network node may be data communication equipment (DCE) such as a modem, hub or, switch, or data terminal equipment (DTE) such as two or more computers and printers. A link refers to the transmission media connecting two nodes. Links may be physical, like cable wires or optical fibers, or free space used by wireless networks.</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;