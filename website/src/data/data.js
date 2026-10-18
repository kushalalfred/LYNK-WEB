// Management Images
import feature1 from "../products_GIFS/GIF_3_StaffAllocate.gif"
import feature2 from "../products_GIFS/GIF_2_ManageRoom.gif"
import feature3 from "../products_GIFS/GIF_1_RequestDashboard.gif";
import onboard1 from "../Carousel_Images/Onboard_1.png";
import onboard2 from "../Carousel_Images/Onboard_2.png";
import onboard3 from "../Carousel_Images/Onboard_3.png";
import onboard4 from "../Carousel_Images/Onboard_4.png";
import stats1 from "../Carousel_Images/Stats_1.png";
import stats2 from "../Carousel_Images/Stats_2.png";
import stats3 from "../Carousel_Images/Stats_3.png";
import stats4 from "../Carousel_Images/Stats_4.png";

// Guests Images
import guest_feature1 from "../products_GIFS/GIF1_Requests_Guest-App.gif";
import guest_feature2 from "../products_GIFS/GIF2_RequestCreation_GuestApp.gif";
import guest_feature3 from "../products_GIFS/GIF_3_WebCheckIn_Create_GuestApp.gif";
import guest_onboard1 from "../Carousel_Images/guestImages/guest_onboard_1.png";
import guest_onboard2 from "../Carousel_Images/guestImages/guest_onboard_2.png";
import guest_onboard3 from "../Carousel_Images/guestImages/guest_onboard_3.png";
import guest_onboard4 from "../Carousel_Images/guestImages/guest_onboard_4.png";
import guest_booking1 from "../Carousel_Images/guestImages/guest_booking_1.png";
import guest_booking2 from "../Carousel_Images/guestImages/guest_booking_2.png";
import guest_booking3 from "../Carousel_Images/guestImages/guest_booking_3.png";
import guest_booking4 from "../Carousel_Images/guestImages/guest_booking_4.png";


export const managementFeatures = [
    {
      title : "Staff Management",
      img : feature1,
      description : `Allocate tasks to staff members, such as housekeeping, spa services, and other duties. Once a task is assigned, the staff will receive a notification on their device. They will have the option to accept or reject the task. Upon completing the task, the staff member can click the "Complete" button to confirm the task's completion.`,
      type : "single"
    },
    {
      title : "Room & Booking Management",
      img : feature2,
      description : `Manage room guests by adding, updating, and removing them as needed. You can update the room's payment status. Additionally, modify check-in and check-out dates, and change room numbers as required. These functions ensure efficient management of room reservations, guest details, and accurate scheduling.`,
      type : "single"
    },
    {
      title : "Requests dashboard",
      img : feature3,
      description : `Hotels can efficiently manage requests with an intuitive dashboard, where staff can be assigned to tasks, ensuring smooth operations. Requests can be categorized by type, such as pre-check-in, post-check-in, and many more, with advanced filters to streamline the process. Once completed, requests are archived under "Past Requests," offering easy access to historical data. Real-time updates keep the dashboard current, enhancing operational efficiency and decision-making.`,
      type : "single"
    },
    {
      title : "Easy Onboarding",
      description : `The onboarding UI for hotels offers a seamless experience, starting with basic hotel details. It allows easy activation of services like housekeeping, food, spa, and pre/post-check-in cabs. Hotels can also effortlessly add amenities such as food types and conference rooms. Additionally, the platform enables quick staff management by allowing the hotel to add and update staff details.`,
      type : "multi",
      images : [onboard1, onboard2, onboard3, onboard4]
    },
    {
      title : "Analytics Dashboard",
      description : `Hotels can access detailed analytics, including metrics such as requests per staff member, revenue generated per service, guest spending patterns, and overall guest satisfaction scores. These insights help streamline operations, optimize service delivery, and enhance guest experiences, providing hotels with the data they need to make informed decisions and improve performance.`,
      type : "multiple",
      images : [stats1, stats2, stats3, stats4]
    }
]


export const guestFeatures = [
  {
    title : "Real Time Data Updates",
    img : guest_feature1,
    description : `The Guest App delivers real-time updates on bookings and requests. Guests can easily view the details of each request and have the option to accept or reject them directly within the app. This seamless functionality ensures that all interactions are handled efficiently, keeping both guests and hotels informed and in control throughout the process.`,
    type : "single"
  },
  {
    title : "Post Check-In Requests",
    img : guest_feature2,
    description : `Guests can create Post-Check-In requests for various services, including food, housekeeping, checkout, Wi-Fi, conference rooms, and more. This feature allows guests to conveniently request additional services directly through the app, ensuring a seamless and personalized experience. With a wide range of options available, guests can easily meet their needs during their stay.`,
    type : "single"
  },
  {
    title : "Pre Check-In Requests",
    img : guest_feature3,
    description : `Guests can create Pre-Check-In requests for services like early check-in, pre-check-in cabs, and web check-ins. This feature offers flexibility and convenience, allowing guests to prepare for their stay ahead of time. By submitting these requests, guests can ensure a smoother, hassle-free arrival, tailoring their experience to suit their needs before even stepping through the door.`,
    type : "single"
  },
  {
    title : "Guest Onboarding",
    description : `In the Guest App, guests enter their phone number to receive a 6-digit OTP on their mobile device. After entering the OTP, if the user already has an account, they are redirected to the bookings page. Here, they can provide their verification ID and can also update their personal details`,
    type : "multi",
    images : [guest_onboard1, guest_onboard2, guest_onboard3, guest_onboard4]
  },
  {
    title : "Booking Management",
    description : `In the Guest Booking system, there are four sections: All, Upcoming, Past, and Ongoing. Guests can access pre-check-in requests such as Cab, Early Check-in, and Web Check-in in the Upcoming section. In the Ongoing section, they can make post-check-in requests like Housekeeping, Food, Spa, Conference Room, and more. In the Past section, guests cannot access any requests. This structure ensures seamless management based on the booking status.`,
    type : "multiple",
    images : [guest_booking1, guest_booking2, guest_booking3, guest_booking4]
  }
]