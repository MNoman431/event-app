import React from "react";

const WhyChooseUs = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h1 className="text-3xl font-bold text-center  mb-12">
                    Why Choose Us?
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Reliability Card */}
                    <div className=" p-8 rounded-lg  hover:border-blue-500 transition-all duration-300">
                       <svg
                            style={{
                                userSelect: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                display: "inline-block",
                                fill: "currentColor",
                                flexShrink: 0,
                                color: "rgb(218, 194, 135)",
                                transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                            className="mb-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82zM14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1" />
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Reliability</h2>
                        <p className="text-gray-600">
                            Our Gather Genie system is built on a robust and reliable platform. We understand that events are significant and require smooth execution. With our system, you can trust that your event planning and execution process will be seamless, eliminating any worries about technical glitches or disruptions.
                        </p>
                    </div>

                    {/* Save Time Card */}
                    <div className=" p-8 rounded-lg  border-gray-200 hover:border-blue-500 transition-all duration-300">
                        <svg
                            style={{
                                userSelect: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                display: "inline-block",
                                fill: "currentColor",
                                flexShrink: 0,
                                color: "rgb(218, 194, 135)",
                                transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                            className="mb-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82zM14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1" />
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Save Time and Effort</h2>
                        <p className="text-gray-600">
                            Time is precious, especially when it comes to event planning. Gather Genie is designed to streamline the entire process, from event creation and promotion to registration and attendee management. You'll save valuable hours that can be redirected towards refining event details, engaging attendees, or focusing on other important tasks.
                        </p>
                    </div>

                    {/* Free Service Card */}
                    <div className=" p-8 rounded-lg  border-gray-200 hover:border-blue-500 transition-all duration-300">
                        <svg
                            style={{
                                userSelect: "none",
                                width: "1.5rem",
                                height: "1.5rem",
                                display: "inline-block",
                                fill: "currentColor",
                                flexShrink: 0,
                                color: "rgb(218, 194, 135)",
                                transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1)"
                            }}
                            className="mb-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="m13.11 5.72-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82zM14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1" />
                        </svg>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Free Service</h2>
                        <p className="text-gray-600">
                            We're proud to offer a free version of our Gather Genie web app that doesn't compromise on essential features. This means you can access tools such as event creation, attendee management, and basic reporting without any cost. Our goal is to help you succeed without adding financial strain.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;