"use client"

import React from "react"
import { LINKS } from "@/javascript/footerLinks";
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


  const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="container m-auto relative">
      <div className="mx-auto w-full max-w-7xl px-8 pt-5">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h1" className="mb-6 font-title text-lg">
            GlobeXVAspire
          </Typography>
          <div id="contact" className="grid grid-cols-3 justify-between gap-4 font-navigation">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((item) => (
                  <li key={item.heading}>
                    <Typography
                      as="a"
                      target="_blank"
                      href={item.link}
                      className="py-1.5 font-normal transition-colors text-black opacity-50 hover:opacity-100"
                    >
                      {item.heading}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-black py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">GlobeXVAspire</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-black sm:justify-center">
            <Typography as="a" target="_blank" href="https://www.facebook.com/profile.php?id=61571249031373" className="opacity-50 transition-opacity hover:opacity-100">
                <FaFacebook className="w-8 h-8"/>
            </Typography>
            <Typography as="a" target="_blank" href="https://www.instagram.com/globexvaspire/profilecard/?igsh=MWlhYjZyYnlteHhwaA%3D%3D&fbclid=IwY2xjawHwl0xleHRuA2FlbQIxMAABHSyG6JeX41dU49Xhz2IMQwb4VuaKv8qzsuMzIh0Z5BGk0emmzbBkRcwzYw_aem_AnpF6jvCcYJE7PgsbFWxRw" className="opacity-50 transition-opacity hover:opacity-100">
                <FaInstagram className="w-8 h-8"/>
            </Typography>
            <Typography as="a" target="_blank" href="https://www.tiktok.com/@globexvaspire?_r=1&_d=secCgYIASAHKAESPgo82kFa0mS4zYD7X2YZoXLZPmaQbe3FflC0M1Lk20CuZRSANivdybwYK7RWlAowKBMEC%2B%2B10ypvUUdWbEASGgA%3D&checksum=6b6d7fcd28d2e1e91e8ad863d150c98824c9f939b5a8772bca9e5a1f48a2b42f&sec_uid=MS4wLjABAAAAs8Jqrruyle4uJbiTYBrEMZ6T6DARAJtWulcEsefGrxoQUcTvbsyPQ-TwwIGQEBCJ&sec_user_id=MS4wLjABAAAAs8Jqrruyle4uJbiTYBrEMZ6T6DARAJtWulcEsefGrxoQUcTvbsyPQ-TwwIGQEBCJ&share_app_id=1180&share_author_id=7451729595907032069&share_link_id=bd58cc4e-2ff0-44b0-9773-6e853969aee2&sharer_language=en&social_share_type=5&source=h5_t&timestamp=1735732223&u_code=ei0i6a694j9f83&ug_btm=b8727%2Cb9716&ugbiz_name=ACCOUNT&user_id=7451729595907032069&utm_campaign=client_share&utm_medium=android&utm_source=copy&fbclid=IwY2xjawHwlxRleHRuA2FlbQIxMAABHWtZA2zwK65Sizb4yagCX0tzkZtaVgvkbu9of9pWJNx33mfcKQCtFYJbsQ_aem_W8DYvdxSSsFa20X6Ymcqug" className="opacity-50 transition-opacity hover:opacity-100">
                <FaTiktok className="w-8 h-8"/>
            </Typography>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Footer;