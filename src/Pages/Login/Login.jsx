import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className=" bg-slate-100 container mx-auto md:flex flex-row-reverse">
      <form
        className="grid  min-h-screen bg-white rounded-md md:w-5/12 lg:w-8/12 "
        onSubmit={props.handleSubmit}
      >
        <div className=" container mx-auto grid gap-6 p-10">
          <div className=" flex flex-col text-center justify-center gap-2">
            <h1 className="text-2xl">Login</h1>
            <p>Create an account to unlock exclusive features.</p>
          </div>

          <div className="grid gap-2 ">
            <label>Email</label>
            <input
              className="px-3 py-3 border rounded-md"
              placeholder="Enter Email"
              {...props.register("email")}
            ></input>
            <p>
              <span style={{ color: "red" }}>
                {props.errors.email?.message}
              </span>
            </p>
          </div>
          <div className="grid gap-2">
            <label>Password</label>
            <input
              className="px-3 py-3 border rounded-md"
              placeholder="Enter Password"
              type="password"
              {...props.register("password")}
            ></input>

            <p>
              <span style={{ color: "red" }}>
                {props.errors.password?.message}
              </span>
            </p>
            <div className=" flex justify-end text-gray-500">
              <Link to="">Forgot Password?</Link>
            </div>
          </div>

          {/* check terms */}
          <div className="flex gap-2 items-center">
            <div>
              <input type="checkbox" className="w-6 bg-slate-400" />
            </div>
            <div className="">
              <p className="text-gray-500 ">Remember Me</p>
            </div>
          </div>
          {/* sign up button */}
          <div className="w-full">
            <button
              type="submit"
              className=" py-3 rounded-md bg-orange-400 w-full text-white"
              onClick={props.handleSubmit}
            >
              Login
            </button>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <hr className="w-52" />
            </div>
            <div>
              <h1>OR</h1>
            </div>
            <div>
              <hr className=" w-52" />
            </div>
          </div>
          <Link
            to=""
            className=" flex justify-center items-center py-2 rounded-md gap-4 bg-slate-200"
          >
            <img src="/public/google.svg" className="w-8" />
            <p> Login with Google</p>
          </Link>
          <div className="flex justify-center items-center gap-1">
            <p>
              Already have an account?{" "}
              <Link to="/">
                <u>Sign Up</u>
              </Link>
            </p>
            <GoArrowUpRight className="text-xl" />
          </div>
        </div>
      </form>
      {/* Testimonial */}
      <section className=" grid content-center">
        <div className="grid md:w-9/12 ">
          {/* header */}
          <div className="container grid gap-6 py-10 ">
            <h1 className="text-2xl">Students Testimonials</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          {/* Comments */}
          <div>
            <div className="grid ">
              <div className=" p-5 bg-white rounded-md shadow-xl ">
                <div>
                  <p className="">
                    The web design course provided a solid foundation for me.
                    The instructors were knowledgeable and supportive, and the
                    interactive learning environment was engaging. I highly
                    recommend it!
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white rounded-b-md shadow-xl">
                <div className=" flex items-center justify-between">
                  {/* img / name */}
                  <div className="flex items-center gap-2">
                    <img src="/Image.svg" />
                    <p>Sarah L</p>
                  </div>
                  {/* read story */}
                  <div className=" bg-slate-200 py-2 px-4 rounded-md">
                    <button>Read Full Story</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
