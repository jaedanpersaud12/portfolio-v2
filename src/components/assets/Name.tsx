"use client";
import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 opacity-60 gap-y-4">
      <motion.svg
        key={"j"}
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 0, 1],
          transition: { delay: 3 },
        }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"jPath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M10.1933 22C8.22134 22 6.28354 21.5992 4.37988 20.7977C2.68963 20.0872 1.55 19.0852 0.960976 17.7918C0.653659 17.1178 0.5 16.4437 0.5 15.7697C0.5 14.8042 1.05061 13.9662 2.15183 13.2557C2.67256 12.9278 3.3939 12.7638 4.31585 12.7638C5.36585 12.7638 6.66768 12.9733 8.22134 13.3923C7.47866 14.8679 7.10732 16.1158 7.10732 17.136C7.10732 17.8373 7.27805 18.4294 7.61951 18.9122C8.43049 20.0781 9.22012 20.661 9.98842 20.661C10.2616 20.661 10.5348 20.5882 10.8079 20.4424C11.3287 20.1509 11.8024 18.9896 12.2293 16.9584C12.4768 15.7925 12.6006 14.4125 12.6006 12.8185C12.6006 11.6435 12.4854 9.88094 12.2549 7.5309C12.0244 5.17176 11.2433 2.9948 9.91159 1L21.5 1.04099C21.261 1.61483 21.0092 2.87638 20.7445 4.82563C20.4799 6.77489 20.3476 9.58491 20.3476 13.2557C20.3476 15.7606 19.5707 17.7554 18.0171 19.2401C16.4634 20.7157 14.4146 21.6038 11.8707 21.9044C11.3073 21.9681 10.7482 22 10.1933 22Z"
          stroke="white"
        />
      </motion.svg>
      <motion.svg
        key={"a"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.2 } }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"aPath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.4,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M7.56576 14.8459C8.29283 14.8459 8.98897 14.5693 9.65416 14.0162C10.2265 13.5356 10.5127 13.0732 10.5127 12.6289L10.5011 12.4521C10.0293 9.82254 9.43372 7.56477 8.71438 5.67876C7.15195 9.8044 6.37073 12.5155 6.37073 13.8122C6.37073 14.5013 6.76907 14.8459 7.56576 14.8459ZM6.01106 22C2.33702 22 0.5 21.0253 0.5 19.0758C0.5 18.8944 0.51547 18.6995 0.546409 18.4909C0.964089 15.7798 2.45691 12.8465 5.02487 9.69106C6.47128 7.91386 7.19449 6.21373 7.19449 4.59067C7.19449 3.35751 6.77681 2.16516 5.94145 1.0136L10.71 1.0408C11.1663 1.0136 11.5879 1 11.9746 1C12.4232 1 12.8216 1.01813 13.1696 1.0544C14.7785 2.78627 16.1205 6.34067 17.1956 11.7176C18.2785 17.0946 19.7133 20.4767 21.5 21.864L10.3039 21.8776C10.8763 21.2701 11.1625 20.0959 11.1625 18.3549C11.1625 17.2487 10.8183 16.3556 10.1299 15.6755C9.79725 15.331 9.43372 15.1587 9.03924 15.1587C8.63703 15.1587 8.20388 15.34 7.73979 15.7027C6.78067 16.4553 6.30112 17.5661 6.30112 19.035C6.30112 20.3679 6.97404 21.3199 8.3199 21.8912C7.48454 21.9637 6.71493 22 6.01106 22Z"
          stroke="white"
        />
      </motion.svg>
      <motion.svg
        key={"e"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.4 } }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"ePath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M21.5 21.8732C20.0729 21.4109 18.8411 21.1797 17.8047 21.1797C17.0473 21.1797 16.3935 21.3021 15.8434 21.5469C15.3969 21.7554 14.9345 21.8596 14.4562 21.8596C13.5473 21.8596 12.5866 21.4834 11.574 20.731C11.7654 21.1571 11.9806 21.5287 12.2198 21.846L0.679385 21.8596C1.8115 20.6993 2.37756 17.4085 2.37756 11.9873C2.36959 6.57526 1.74374 2.91281 0.5 1L11.3229 1.04079C11.0837 1.5122 10.8964 2.2465 10.7608 3.2437C11.9487 1.79323 13.1686 1.06799 14.4203 1.06799C16.6367 1.06799 18.3388 1.48047 19.5268 2.30543C20.7147 3.12132 21.3087 4.10492 21.3087 5.25624C21.3087 6.24437 21.0216 6.89708 20.4476 7.21438C16.9795 6.88802 15.2454 6.23077 15.2454 5.24264C15.2454 4.38142 14.9624 3.64712 14.3964 3.03973C14.0695 2.69524 13.4795 2.523 12.6264 2.523C12.3793 2.523 12.0444 2.68618 11.6219 3.01253C11.1993 3.33889 10.8645 4.06413 10.6173 5.18824C10.3702 6.31236 10.2466 8.24784 10.2466 10.9947C10.2466 11.1579 10.2864 11.2394 10.3662 11.2394C10.5017 11.2394 10.9282 10.768 11.6458 9.82523C12.3633 8.87336 13.328 8.13452 14.5399 7.60872C14.8986 7.45461 15.2893 7.37755 15.7118 7.37755C16.7323 7.37755 17.9522 7.81723 19.3713 8.69658C20.344 9.30396 20.8303 10.0609 20.8303 10.9675C20.8303 11.9465 20.2722 13.1024 19.156 14.435C17.2745 12.2412 15.7796 11.1443 14.6714 11.1443C13.8502 11.1443 12.9852 11.7607 12.0763 12.9936C11.1754 14.2174 10.7249 15.3642 10.7249 16.434C10.7249 17.1411 10.8126 17.8119 10.988 18.4465L10.9761 18.3785C11.2312 19.0493 11.59 19.3848 12.0524 19.3848C13.0569 19.3848 14.8468 18.2969 17.422 16.1212C18.1076 15.541 18.7096 15.2509 19.2278 15.2509C20.6469 15.2509 21.4043 17.4583 21.5 21.8732Z"
          stroke="white"
        />
      </motion.svg>
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>
      <motion.svg
        key={"d"}
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 0, 1],
          transition: { delay: 3.2 },
        }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"dPath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.4,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M13.7103 21C12.3342 21 11.3709 20.6213 10.8205 19.8638C10.6684 19.6447 10.538 19.5352 10.4294 19.5352C10.3497 19.5352 10.2845 19.59 10.2338 19.6995C10.1976 19.7634 10.1795 19.8364 10.1795 19.9185C10.1795 20.1741 10.3352 20.53 10.6467 20.9863L0.162959 21C1.19141 19.8318 1.70564 16.5189 1.70564 11.0613C1.6984 5.61278 1.12985 1.92568 0 0L9.83187 0.0410691C9.62907 0.597784 9.45887 1.30508 9.32126 2.16297C10.5815 0.766623 12.0445 0.0684485 13.7103 0.0684485C15.7237 0.0684485 17.4402 1.09061 18.8598 3.13494C20.2866 5.17927 21 7.64342 21 10.5274C21 13.4205 20.2866 15.8892 18.8598 17.9335C17.4402 19.9778 15.7237 21 13.7103 21ZM11.6787 19.1382C13.0548 19.1382 13.7429 16.9342 13.7429 12.5261C13.7429 9.81551 13.4061 7.50196 12.7325 5.5854C12.059 3.65971 11.2478 2.69687 10.299 2.69687C9.33575 2.69687 8.85411 5.74967 8.85411 11.8553V12.4029C8.86136 16.4368 9.67977 18.6636 11.3094 19.0834C11.4397 19.1199 11.5629 19.1382 11.6787 19.1382Z"
          stroke="white"
        />
      </motion.svg>
      <motion.svg
        key={"a"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.4 } }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"aPath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M7.56576 14.8459C8.29283 14.8459 8.98897 14.5693 9.65416 14.0162C10.2265 13.5356 10.5127 13.0732 10.5127 12.6289L10.5011 12.4521C10.0293 9.82254 9.43372 7.56477 8.71438 5.67876C7.15195 9.8044 6.37073 12.5155 6.37073 13.8122C6.37073 14.5013 6.76907 14.8459 7.56576 14.8459ZM6.01106 22C2.33702 22 0.5 21.0253 0.5 19.0758C0.5 18.8944 0.51547 18.6995 0.546409 18.4909C0.964089 15.7798 2.45691 12.8465 5.02487 9.69106C6.47128 7.91386 7.19449 6.21373 7.19449 4.59067C7.19449 3.35751 6.77681 2.16516 5.94145 1.0136L10.71 1.0408C11.1663 1.0136 11.5879 1 11.9746 1C12.4232 1 12.8216 1.01813 13.1696 1.0544C14.7785 2.78627 16.1205 6.34067 17.1956 11.7176C18.2785 17.0946 19.7133 20.4767 21.5 21.864L10.3039 21.8776C10.8763 21.2701 11.1625 20.0959 11.1625 18.3549C11.1625 17.2487 10.8183 16.3556 10.1299 15.6755C9.79725 15.331 9.43372 15.1587 9.03924 15.1587C8.63703 15.1587 8.20388 15.34 7.73979 15.7027C6.78067 16.4553 6.30112 17.5661 6.30112 19.035C6.30112 20.3679 6.97404 21.3199 8.3199 21.8912C7.48454 21.9637 6.71493 22 6.01106 22Z"
          stroke="white"
        />
      </motion.svg>
      <motion.svg
        key={"e"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.6 } }}
        width="210"
        height="210"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"ePath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.8,
          }}
          strokeWidth={0.2}
          strokeDasharray="0 1"
          d="M12.0632 21C12.677 19.115 12.9839 17.3993 12.9839 15.8529C12.9839 14.1601 12.6137 12.6732 11.8734 11.3922C10.6016 9.18693 9.61451 8.08431 8.91217 8.08431C8.82991 8.08431 8.5958 8.16209 8.20982 8.31765C7.83018 8.46405 7.64036 9.6719 7.64036 11.9412V12.4902C7.64668 14.9699 8.16237 17.802 9.18741 20.9863L0.142367 21C1.02821 19.8471 1.47112 16.5667 1.47112 11.1588C1.4648 5.76013 0.974422 2.10915 0 0.205882C1.04402 0.0686275 2.01528 0 2.91378 0C7.15947 0 9.7031 1.73399 10.5446 5.20196C11.3862 8.66078 12.0727 10.6327 12.6042 11.1176C12.6548 11.1725 12.7023 11.2 12.7466 11.2C12.9238 11.2 13.0123 10.8203 13.0123 10.0608C13.0123 9.1549 12.9396 7.99281 12.794 6.57451C12.6485 5.14706 12.2499 3.71046 11.5982 2.26471C12.2499 0.873856 14.6416 0.178431 18.7734 0.178431C19.286 0.178431 19.8301 0.201307 20.4059 0.247059C19.8428 2.01307 19.5612 6.09412 19.5612 12.4902C19.5675 14.9699 20.0832 17.802 21.1083 20.9863L12.0632 21Z"
          stroke="white"
        />
      </motion.svg>
    </div>
  );
};

export default Name;