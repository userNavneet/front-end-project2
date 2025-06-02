import React from "react";
import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";
import f1logo from "../assets/f1logo.png";

function Footer({ setlatestHover, setf1Hover }) {
    return (
        <div onMouseEnter={() => setlatestHover(false)} onMouseOver={() => setf1Hover(false)}>
            <footer className="bg-slate-950 p-8">
                <div className="flex flex-wrap justify-between w-full">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start ml-0 sm:ml-10 p-2 w-full sm:w-1/2 gap-4">
                        <p className="text-sm text-gray-400">Download The F1 App</p>
                        <img className="w-1/3 sm:w-[20%]" src={playstore} alt="Play Store" />
                        <img className="w-1/3 sm:w-[20%]" src={apple} alt="Apple Store" />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center w-full sm:w-1/3 justify-center sm:justify-end mt-4 sm:mt-0 gap-4">
                        <p className="text-gray-400">Formula Racing</p>
                        <img className="w-1/3 sm:w-auto p-2 sm:mr-10" src={f1logo} alt="F1 Logo" />
                    </div>
                </div>
                <div className="text-white p-4 sm:p-12">
                    <div className="flex flex-wrap p-5 border-r-8 border-red-600 border-b-8 rounded-r-3xl rounded-t-none justify-between">
                        <FooterColumn>
                            <FooterLink text="Latest News" textSize="text-xl" />
                            <FooterLink text="What is F1?" textSize="text-sm" />
                            <FooterLink text="Video" textSize="text-sm" />
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLink text="Results" textSize="text-xl" />
                            <FooterLink text="2024 SEASON" textSize="text-xs" />
                            <FooterLink text="DRIVER STANDINGS" textSize="text-xs" />
                            <FooterLink text=" STANDINGS" textSize="text-xs" />
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLink text="Gaming" textSize="text-xl" />
                            <FooterLink text="ESPORTS" textSize="text-xs" />
                            <FooterLink text="FANTASY" textSize="text-xs" />
                            <FooterLink text="F1 24" textSize="text-xs" />
                            <FooterLink text="F1 MANAGER 24" textSize="text-xs" />
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLink text="Live Timing" textSize="text-xl" />
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLink text="Tickets" textSize="text-xl" />
                            <FooterLink text="F1® Experiences" textSize="text-sm" />
                            <FooterLink text="Store" textSize="text-sm" />
                            <FooterLink text="Paddock Club" textSize="text-sm" />
                        </FooterColumn>
                        <FooterColumn>
                            <FooterLink text="Rules & Regulations" textSize="text-xl" />
                        </FooterColumn>
                    </div>
                    <div className="flex flex-wrap justify-center border-b-2 items-center mt-2 py-6">
                        <FooterBottomLink text="CONTACTS" />
                        <FooterBottomLink text="F1 TV SUPPORT" />
                        <FooterBottomLink text="PRIVACY POLICY" />
                        <FooterBottomLink text="COOKIES POLICY" />
                        <FooterBottomLink text="GUIDELINES" />
                        <FooterBottomLink text="LEGAL NOTICES" />
                        <FooterBottomLink text="CODE OF CONDUCT" />
                        <FooterBottomLink text="ANTI-BRIBERY" />
                        <FooterBottomLink text="HUMAN RIGHTS" />
                        <FooterBottomLink text="GENDER PAY REPORT" />
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-8">
                        <svg
                            width="120"
                            height="80"
                            viewBox="0 0 320 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-1/2 sm:w-auto"
                        >
                            <g clipPath="url(#clip0_1_57)">
                                <g clipPath="url(#clip1_1_57)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M45.2583 80L80.7417 45.575H80.7333C94.7167 32.0167 100.392 29.9583 127.058 29.9583H233.408L264.008 0H123.025C87.3333 0 77.2417 3.4 56.3083 24.1167L0 80H45.2583ZM127.7 34.7417H228.842L200.792 62.7917H128.225C114.925 62.7917 111.983 63.4167 105.383 70.0167L95.4 80H53.4333L84.4583 48.975C96.6417 36.8 100.842 34.7417 127.7 34.7417ZM320 0L239.783 80H190.175L270.175 0H320ZM267.183 77.4667C268.85 79.1583 270.95 80 273.475 80C276 80 278.075 79.1583 279.717 77.4833C281.358 75.8083 282.175 73.7333 282.175 71.2667C282.175 68.8 281.35 66.725 279.7 65.0333C278.05 63.3417 275.967 62.5 273.442 62.5C270.917 62.5 268.825 63.3417 267.167 65.0167C265.508 66.6917 264.675 68.7667 264.675 71.2333C264.675 73.7 265.508 75.775 267.183 77.4667ZM268.225 66.025C269.625 64.5917 271.358 63.875 273.425 63.875C275.5 63.875 277.233 64.5917 278.625 66.025C280.017 67.4583 280.717 69.2 280.717 71.25C280.717 73.3 280.017 75.0333 278.625 76.4583C277.225 77.8833 275.5 78.5917 273.425 78.5917C271.35 78.5917 269.617 77.875 268.225 76.4417C266.833 75.0083 266.133 73.275 266.133 71.2333C266.133 69.1917 266.833 67.4583 268.225 66.025ZM271.717 76.125V72.6917L271.725 72.7H273.683L275.342 76.1333H277.367L275.542 72.45C276.158 72.1667 276.592 71.8 276.85 71.3417C277.108 70.8833 277.233 70.1833 277.233 69.2417C277.233 68.3 276.917 67.5917 276.283 67.125C275.65 66.65 274.7 66.4167 273.442 66.4167H269.792V76.125H271.717ZM271.683 71.1833V67.9167H273.275C274.65 67.9167 275.333 68.4583 275.333 69.55C275.333 70.125 275.2 70.5417 274.933 70.8C274.675 71.0583 274.242 71.1833 273.642 71.1833H271.683Z"
                                        fill="white"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_57">
                                    <rect width="320" height="80" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_1_57">
                                    <rect width="320" height="80" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-xs sm:text-sm p-4 text-white">&copy; 2003-2024 Formula One World Championship Limited</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FooterColumn({ children }) {
    return <div className="flex flex-col items-center sm:items-start">{children}</div>;
}

function FooterLink({ text, textSize }) {
    return <a className={`text-white ${textSize} p-2`} href="/">{text}</a>;
}

function FooterBottomLink({ text }) {
    return <a className="text-white text-xs sm:text-sm p-2" href="/">{text}</a>;
}

export default Footer;
