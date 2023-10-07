import "./scss/_Settingscontent.scss";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaServer,
  FaFacebookF,
} from "react-icons/fa";
import { useEffect } from "react";

// toggle
const Settingscontent = () => {
  document.querySelectorAll(".toggle-relative").forEach((e) => {
    e.addEventListener("click", () => {
      if (e.children[0].children[1].classList.contains("hidden")) {
        e.classList.add("bg-gray-500");
        e.children[0].children[0].classList.add("hidden");
        e.children[0].classList.add("toggle-animation");
        e.children[0].classList.remove("rv-toggle-animation");
        e.classList.remove("bg-mb");
        e.children[0].children[1].classList.remove("hidden");
      } else {
        e.classList.add("bg-mb");
        e.children[0].children[0].classList.remove("hidden");
        e.children[0].classList.add("rv-toggle-animation");
        e.children[0].classList.remove("toggle-animation");
        e.classList.remove("bg-gray-500");
        e.children[0].children[1].classList.add("hidden");
      }
    });
  });
//remove disabled inputs edit
const abled = () => {
    const inputs = document.querySelectorAll(".disabled");
    inputs.forEach((e) => {
        e.attributes.removeNamedItem("disabled");
    });
};
//syling mini plans
  useEffect(() => {
    const miniPlans = document.querySelectorAll(".mini-plan");
    miniPlans.forEach((e) => {
      e.addEventListener("click", () => {
        miniPlans.forEach((e) => {
          e.classList.remove("border-mb");
        });
        e.classList.add("border-mb");
      });
    });
  }, []);

  return (
    <div className="settings-content">
      <div className="content px-4 py-5 dark:bg-sd">
        <p className="title relative w-fit py-3 text-2xl font-bold text-black dark:text-white">
          Settings
        </p>
        <div className="main-cards-container mt-6 flex flex-wrap justify-between gap-y-4">
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              Site Control
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Control The Website If There Is Maintenance
            </p>
            <div className="flex items-center justify-between py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Website Control</p>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Website Control</p>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Website Control</p>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Website Control</p>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              General Info
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              General Information About Your Account
            </p>
            <div className="relative flex flex-col gap-1 py-3">
              <label htmlFor="firstname" className="text-lg dark:text-white ">
                First Name
              </label>
              <input
                type="text"
                name=""
                disabled
                id="firstname"
                className="disabled mb-4 rounded-lg bg-sw py-2 pl-4 focus:outline-none dark:text-md"
                placeholder="Mohamed"
              />
              <label htmlFor="lastname" className="text-lg dark:text-white">
                Last Name
              </label>
              <input
                type="text"
                name=""
                disabled
                id="firstname"
                className="disabled mb-4 rounded-lg bg-sw py-2 pl-4 focus:outline-none dark:text-md"
                placeholder="Outerbah"
              />
              <label htmlFor="email" className="text-lg dark:text-white">
                Email
              </label>
              <input
                type="text"
                name=""
                disabled
                id="email"
                className="disabled mb-4 rounded-lg bg-sw py-2 pl-4 focus:outline-none dark:text-md"
                placeholder="mohamedterba6@gmail.com"
              />
              <p
                className="bg-mb absolute -bottom-7 right-0 w-fit cursor-pointer rounded-lg px-4 py-2 font-bold text-white"
                onClick={abled}
              >
                Change
              </p>
            </div>
          </div>
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              Security Info
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Security Information About Your Account
            </p>
            <div className="flex items-center justify-between border-b py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Password</p>
                <p className="text-gray-400">Last Change On 25/10/2021</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-b py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">
                  Two-Factor Authentication
                </p>
                <p className="text-gray-400">Enable/Disable The Feature</p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-b py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Email Defender</p>
                <p className="text-gray-400">Enable/Disable The Feature</p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 text-left">
              <div>
                <p className="font-bold dark:text-white">Website Control</p>
                <p className="text-gray-400">
                  Open/Close Website And Type The Reason
                </p>
              </div>
              <div className="toggle-relative bg-mb relative h-8 w-20 cursor-pointer rounded-3xl duration-1000">
                <div className="toggle-absolute absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                  <FaCheck className="text-mb check text-base" />
                  <FaXmark className="x-mark hidden text-base text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              Social Info
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Social Media Username
            </p>
            <div className="flex flex-col">
              <div className="my-4 flex items-center justify-between rounded-lg border border-gray-400 bg-sw px-2">
                <FaGithub className="w-fit pr-2 text-3xl text-gray-500" />
                <p className="flex-1 border-l-2 border-l-gray-400 py-3 pl-2 text-left font-bold text-gray-500">
                  Mohamed-gp
                </p>
              </div>
              <div className="my-4 flex items-center justify-between rounded-lg border border-gray-400 bg-sw px-2">
                <FaLinkedin className="w-fit pr-2 text-3xl text-gray-500" />
                <p className="flex-1 border-l-2 border-l-gray-400 py-3 pl-2 text-left font-bold text-gray-500">
                  Mohamed Outerbah
                </p>
              </div>
              <div className="my-4 flex items-center justify-between rounded-lg border border-gray-400 bg-sw px-2">
                <FaInstagram className="w-fit pr-2 text-3xl text-gray-500" />
                <p className="flex-1 border-l-2 border-l-gray-400 py-3 pl-2 text-left font-bold text-gray-500">
                  outerbahm
                </p>
              </div>
              <div className="my-4 flex items-center justify-between rounded-lg border border-gray-400 bg-sw px-2">
                <FaFacebookF className="w-fit pr-2 text-3xl text-gray-500" />
                <p className="flex-1 border-l-2 border-l-gray-400 py-3 pl-2 text-left font-bold text-gray-500">
                  Mohamed Outerbah
                </p>
              </div>
            </div>
          </div>
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              Widgets Control
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Show/Hide Widgets
            </p>
            <section className="flex flex-col items-start gap-4 py-4 pb-8">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="draft"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="draft"
                  className="text-xl font-bold dark:text-white"
                >
                  Quick Draft
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="target"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="target"
                  className="text-xl font-bold dark:text-white"
                >
                  Yearly Targets
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="tickets"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="tickets"
                  className="text-xl font-bold dark:text-white"
                >
                  Tickets Statistics
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="news"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="news"
                  className="text-xl font-bold dark:text-white"
                >
                  Latest News
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="tasks"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="tasks"
                  className="text-xl font-bold dark:text-white"
                >
                  Latest Tasks
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="items"
                  className="h-5 w-5 rounded-lg"
                />
                <label
                  htmlFor="items"
                  className="text-xl font-bold dark:text-white"
                >
                  Top Search Items
                </label>
              </div>
            </section>
          </div>
          <div className="main-card relative rounded-lg bg-white p-6  text-center dark:bg-md md:text-left">
            <p className="text-center text-3xl font-bold dark:text-white md:text-left">
              Backup Manager
            </p>
            <p className="text-center  text-lg text-gray-400 md:text-left">
              Control Backup Time And Location
            </p>
            <section className="flex flex-col items-start gap-4 border-b border-b-gray-500 py-4 pb-8">
              <div className="flex items-center gap-3">
                <input type="radio" name="plan" id="daily" />
                <label
                  htmlFor="daily"
                  className="text-xl font-bold dark:text-white"
                >
                  Daily
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="plan" id="monthly" />
                <label
                  htmlFor="monthly"
                  className="text-xl font-bold dark:text-white"
                >
                  Monthly
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input type="radio" name="plan" id="yearly" />
                <label
                  htmlFor="yearly"
                  className="text-xl font-bold dark:text-white"
                >
                  Yearly
                </label>
              </div>
            </section> 
            <div className="mini-plans-container my-6 flex md:flex-row flex-col items-center justify-between gap-2 dark:text-white">
              <div className="mini-plan  flex md:w-1/3 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-500 md:px-8 w-full md:py-6  text-xl px-4 py-4">
                <FaServer />
                <p>Megaman</p>
              </div>
              <div className="mini-plan  flex md:w-1/3 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-500 md:px-8 w-full md:py-6 text-xl px-4 py-4">
                <FaServer />
                <p>Zero</p>
              </div>
              <div className="border-mb mini-plan flex md:w-1/3 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-gray-500 md:px-8 w-full md:py-6 text-sm text-xl px-4 py-4">
                <FaServer />
                <p>Sigma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settingscontent;
