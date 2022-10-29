import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="py-16 ">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="mb-12 my-6 space-y-2 text-center">
                        <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Welcome to my Blog</span>
                        <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                        <p class="lg:w-6/12 lg:mx-auto">Welcome to my blog.Here you can explore various expectional concept of programming and web development</p>
                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.roberthalf.com/sites/default/files/2022-05/How-to-Become-a-Programmer-Analyst-Blog-RH-05-18-2022.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                                <div class="sm:w-7/12 pl-0 p-5">
                                    <div class="space-y-2">
                                        <div class="space-y-4">
                                        <h4 class="text-2xl font-semibold text-cyan-900">Is There a Role in the Healthcare Industry For Computer Programmers?</h4>
                                        <p class="text-gray-600">Today’s healthcare industry uses computers in a much more sophisticated way, and lab scientists are no longer required to analyze the data collected by computers in a research laboratory.These...</p>
                                        </div>
                                        <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                    </div>
                                </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_470285218_2000133320009280218_277406.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                                <div class="sm:w-7/12 pl-0 p-5">
                                    <div class="space-y-2">
                                        <div class="space-y-4">
                                            <h4 class="text-2xl font-semibold text-cyan-900">What is Podcast?</h4>
                                        <p class="text-gray-600">a digital audio file made available on the internet for downloading to a computer or mobile device, typically available as a series, new instalments of which can be received by subscribers...</p>
                                        </div>
                                        <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="mb-12 space-y-2 text-center">
                       
                    </div>

                    <div class="grid gap-12 lg:grid-cols-2">
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://flxt.tmsimg.com/assets/p11682476_b_v13_ae.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                                <div class="sm:w-7/12 pl-0 p-5">
                                    <div class="space-y-2">
                                        <div class="space-y-4">
                                            <h4 class="text-2xl font-semibold text-cyan-900">Movies to Watch for Ethical Hackers.</h4>
                                        <p class="text-gray-600">It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker with social anxiety disorder and clinical depression.Elliot is recruited by an insurrectionary anarchist known as "Mr. Robot", played by Christian Slater, to join a group of hacktivists called "fsociety...</p>
                                        </div>
                                        <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                    </div>
                                </div>
                        </div>
                        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1809/posts/40848/image-upload/CSS_Animated_Gradient_Backgrounds.jpg" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
                                <div class="sm:w-7/12 pl-0 p-5">
                                    <div class="space-y-2">
                                        <div class="space-y-4">
                                            <h4 class="text-2xl font-semibold text-cyan-900">CSS3 Animated Gradient Background Effect.</h4>
                                        <p class="text-gray-600">Featured are two styles of animated gradient backgrounds, light and dark.All the layouts are mobile-ready and use CSS features instead of images.Detailed documentation is included so you can implement and change the library quickly and easily....</p>
                                        </div>
                                        <a href="/blog" class="block w-max text-cyan-600">Read more</a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;