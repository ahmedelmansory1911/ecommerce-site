import React from "react";
import {
  MdManageAccounts,
  MdMarkEmailUnread,
  MdOutlinePublishedWithChanges,
  MdPayment,
} from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { FaHome, FaClipboardList, FaDownload } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function UserAccount() {
  return (
    <div className="fade-in">
      <MyAccount />
      <MyOrders />
      <MyAffiliateAccount />
    </div>
  );
}
const MyAccount = () => {
  const cards = [
    {
      icon: <MdManageAccounts />,
      title: "Edit Account",
      subTitle: "تحرير حسابك",
      route: "edit-account",
    },
    {
      icon: <SiSpringsecurity />,
      title: "Password",
      subTitle: "تغيير كلمة السر",
      route: "change-password",
    },
    {
      icon: <FaHome />,
      title: "Address Book",
      subTitle: "تعديل العنوان",
      route: "address",
    },
    {
      icon: <MdMarkEmailUnread />,
      title: "NewSletter",
      subTitle: "اشترك في النشرة الاخبارية",
      route: "newsletter",
    },
  ];
  return (
    <>
      <div className="flex items-center px-3 py-2 mb-3 w-full bg-gray-100 text-black gap-5">
        <h2 className="text-primary">My Account</h2>
      </div>
      <div className="my-4 grid grid-cols-1  md:grid-cols-2  gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex border-2 rounded-md border-gray-200 p-3"
          >
            <div className="flex justify-center items-center border-r-2 border-gray-200 md:text-6xl text-4xl px-2 text-gray-800 ">
              {card.icon}
            </div>
            <Link to={`/account/${card.route}`}>
              {" "}
              <div className="px-4 cursor-pointer">
                <h1 className="hover:text-primary mb-1 duration-300 transition-colors">
                  {card.title}
                </h1>
                <p className="font-amiri text-gray-500">{card.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
const MyOrders = () => {
  const cards = [
    {
      icon: <FaClipboardList />,
      title: "order history",
      subTitle: "شاهد تاريخ طلبك",
      route: "order-history",
    },
    {
      icon: <FaDownload />,
      title: "Downloads",
      subTitle: "تحميل القالب",
      route: "download",
    },
    {
      icon: <LiaAwardSolid />,
      title: "Reward Points",
      subTitle: "عد نقاط المكافأة",
      route: "rewards",
    },
    {
      icon: <MdOutlinePublishedWithChanges />,
      title: "Return",
      subTitle: "See your return",
      route: "return",
    },
    {
      icon: <GrTransaction />,
      title: "Transactions",
      subTitle: "See your Transaction",
      route: "transactions",
    },
    {
      icon: <MdPayment />,
      title: "Payments",
      subTitle: "وسيلة الدفع الخاصة بك",
      route: "payment",
    },
  ];
  return (
    <>
      <div className="flex items-center px-3 py-2 mb-3 w-full bg-gray-100 text-black gap-5">
        <h2 className="text-primary">My Orders</h2>
      </div>
      <div className="my-4 grid grid-cols-1  md:grid-cols-2  gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex border-2 rounded-md border-gray-200 p-3"
          >
            <div className="flex justify-center items-center border-r-2 border-gray-200 md:text-6xl text-4xl px-2 text-gray-800 ">
              {card.icon}
            </div>
            <Link to={`/account/${card.route}`}>
              {" "}
              <div className="px-4 cursor-pointer">
                <h1 className="hover:text-primary mb-1 duration-300 transition-colors">
                  {card.title}
                </h1>
                <p className="font-amiri text-gray-500">{card.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
const MyAffiliateAccount = () => {
  const cards = [
    {
      icon: <MdManageAccounts />,
      title: "Register affiliate",
      subTitle: "سجل معانا",
      route: "affiliate",
    },
  ];
  return (
    <>
      <div className="flex items-center px-3 py-2 mb-3 w-full bg-gray-100 text-black gap-5">
        <h2 className="text-primary">My Affiliate Account</h2>
      </div>
      <div className="my-4 grid grid-cols-1  md:grid-cols-2  gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex border-2 rounded-md border-gray-200 p-3"
          >
            <div className="flex justify-center items-center border-r-2 border-gray-200 md:text-6xl text-4xl px-2 text-gray-800 ">
              {card.icon}
            </div>
            <Link to={`/account/${card.route}`}>
              {" "}
              <div className="px-4 cursor-pointer">
                <h1 className="hover:text-primary mb-1 duration-300 transition-colors">
                  {card.title}
                </h1>
                <p className="font-amiri text-gray-500">{card.subTitle}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
