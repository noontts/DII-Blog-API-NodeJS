import React from 'react'

const EditPost = () => {
  return (
    <>
      <div>EditPost</div>

      <form className="w-100 h-auto" onSubmit={submitPost}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChangeTitle}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:border-sky-400"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={onChangeContent}
            required
            className="w-full p-2 border border-gray-300 rounded-md h-{500px} p-3 focus:border-sky-400"
          ></textarea>
        </div>

        <button
          type="save"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green"
        >
          Save
        </button>
      </form>
    </>
  )
}

export default EditPost