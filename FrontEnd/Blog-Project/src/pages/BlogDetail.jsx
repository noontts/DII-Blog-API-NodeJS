import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../services/blogs";

const BlogDetail = () => {
  const id = useParams();
  const [blogDetail, setBlogDetail] = useState({});

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchBlog(id.id);
      setBlogDetail(data);
      console.log(data);
    };

    fetchDetail();
  }, [id.id]);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-3">
        <div className="text-4xl font-medium p-3">{blogDetail.title}</div>
        <div className="flex justify-start w-full p-3">
          <div>{blogDetail.author}</div>
          <div className="font-thin mx-3 text-gray-500">|</div>
          <div>{blogDetail.date}</div>
        </div>
        <img className="w-full h-[400px] object-cover" src={`http://localhost:3000/api/v1/blogs/images/${blogDetail.imageURL}`} loading="lazy"></img>
        <div className="p-3">{blogDetail.content}</div>
      </div>

      <div class="mt-10 bg-white  py-8 lg:py-16 antialiased">
        <div class="max-w-2xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-lg lg:text-2xl font-bold text-gray-900 text-black">Discussion (20)</h2>
          </div>
          <form class="mb-6">
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border-2 border-gray-200 dark:bg-white dark:border-gray-700">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea id="comment" rows="6"
                      class="px-0 w-full h-{500px} resize-none text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-black dark:placeholder-gray-400 dark:bg-white"
                      placeholder="Write a comment..." required></textarea>
              </div>
              <button type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-600">
                  Post comment
              </button>
          </form>
          <article class="p-6 text-base bg-white rounded-lg dark:bg-white">
              <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black font-semibold">Michael Gough</p>
                      <p class="text-sm text-gray-800 dark:text-gray-800"><time pubdate datetime="2022-02-08"
                              title="February 8th, 2022">Feb. 8, 2022</time></p>
                  </div>
                  <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-800 dark:text-gray-300 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span class="sr-only">Comment settings</span>
                  </button>
                  
                  <div id="dropdownComment1"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p class="text-gray-800 dark:text-gray-800">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                  instruments for the UX designers. The knowledge of the design tools are as important as the
                  creation of the design strategy.</p>
              <div class="flex items-center mt-4 space-x-4">
                  <button type="button"
                      class="flex items-center text-sm text-gray-800 hover:underline dark:text-gray-800 font-medium">
                      <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                      </svg>
                      Reply
                  </button>
              </div>
          </article>
          <article class="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-white">
              <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black font-semibold">Jese Leos</p>
                      <p class="text-sm text-gray-800 dark:text-gray-800"><time pubdate datetime="2022-02-12"
                              title="February 12th, 2022">Feb. 12, 2022</time></p>
                  </div>
                  <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-800 dark:text-gray-300 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span class="sr-only">Comment settings</span>
                  </button>
                  
                  <div id="dropdownComment2"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p class="text-gray-800 dark:text-gray-800">Much appreciated! Glad you liked it ☺️</p>
              <div class="flex items-center mt-4 space-x-4">
                  <button type="button"
                      class="flex items-center text-sm text-gray-800 hover:underline dark:text-gray-800 font-medium">
                      <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                      </svg>                
                      Reply
                  </button>
              </div>
          </article>
          <article class="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-white">
              <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black font-semibold">Bonnie Green</p>
                      <p class="text-sm text-gray-800 dark:text-gray-800"><time pubdate datetime="2022-03-12"
                              title="March 12th, 2022">Mar. 12, 2022</time></p>
                  </div>
                  <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-800 dark:text-gray-300 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                      <span class="sr-only">Comment settings</span>
                  </button>
                  
                  <div id="dropdownComment3"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p class="text-gray-800 dark:text-gray-800">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
              <div class="flex items-center mt-4 space-x-4">
                  <button type="button"
                      class="flex items-center text-sm text-gray-800 hover:underline dark:text-gray-800 font-medium">
                      <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                      </svg>
                      Reply
                  </button>
              </div>
          </article>
          <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-white">
              <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center">
                      <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black font-semibold">Helene Engels</p>
                      <p class="text-sm text-gray-800 dark:text-gray-800"><time pubdate datetime="2022-06-23"
                              title="June 23rd, 2022">Jun. 23, 2022</time></p>
                  </div>
                  <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                      class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-800 dark:text-gray-300 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      type="button">
                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                      </svg>
                  </button>
                  
                  <div id="dropdownComment4"
                      class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownMenuIconHorizontalButton">
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                          </li>
                          <li>
                              <a href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                          </li>
                      </ul>
                  </div>
              </footer>
              <p class="text-gray-800 dark:text-gray-800">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
              <div class="flex items-center mt-4 space-x-4">
                  <button type="button"
                      class="flex items-center text-sm text-gray-800 hover:underline dark:text-gray-800 font-medium">
                      <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                      </svg>
                      Reply
                  </button>
              </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
