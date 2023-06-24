"use client";
import { motion } from "framer-motion";

const Name = () => {
  return (
    <div className="grid items-center justify-center grid-cols-2 md:grid-cols-4 opacity-60 gap-y-4">
      <motion.svg
        // className="flex items-center justify-center"
        key={"j"}
        initial={{ opacity: 1 }}
        animate={{
          opacity: [1, 0, 1],
          transition: { delay: 3 },
        }}
        width="180"
        height="180"
        viewBox="0 0 212 212"
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
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M97.9329 211C78.2134 211 58.8354 206.992 39.7988 198.976C22.8963 191.872 11.5 181.852 5.60976 168.918C2.53659 162.178 1 155.437 1 148.697C1 139.042 6.5061 131.562 17.5183 123.557C22.7256 120.278 29.939 118.638 39.1585 118.638C49.6585 118.638 62.6768 120.733 78.2134 124.923C70.7866 139.679 67.0732 152.158 67.0732 162.36C67.0732 169.373 68.7805 175.294 72.1951 180.122C80.3049 191.781 88.2012 197.61 95.8841 197.61C98.6158 197.61 101.348 196.881 104.079 195.424C109.287 192.509 114.024 180.896 118.293 160.584C120.768 148.924 122.006 135.125 122.006 119.185C122.006 107.435 120.854 89.8093 118.549 66.309C116.244 42.7176 108.433 20.9479 95.1158 1L211 1.40989C208.61 7.14834 206.091 19.7638 203.445 39.2563C200.799 58.7488 199.476 86.849 199.476 123.557C199.476 148.606 191.707 168.554 176.171 183.401C160.634 198.157 140.146 207.038 114.707 210.043C109.073 210.681 103.482 211 97.9329 211Z"
          className="stroke-text"
        />
      </motion.svg>

      <motion.svg
        key={"a"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.2 } }}
        width="180"
        height="180"
        viewBox="0 0 212 212"
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
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M71.5927 139.458C78.8634 139.458 85.8248 136.693 92.4767 131.162C98.2004 126.356 101.062 121.732 101.062 117.289L100.946 115.521C96.2281 89.2253 90.2723 66.6476 83.0789 47.7875C67.4546 89.044 59.6425 116.155 59.6425 129.122C59.6425 136.013 63.6259 139.458 71.5927 139.458ZM56.0458 211C19.3055 211 0.935303 201.252 0.935303 181.758C0.935303 179.944 1.09 177.995 1.39939 175.909C5.57618 148.798 20.5044 119.465 46.1839 87.9106C60.648 70.1386 67.88 53.1373 67.88 36.9067C67.88 24.5751 63.7032 12.6515 55.3496 1.13601L103.035 1.40803C107.598 1.13601 111.814 1 115.681 1C120.167 1 124.151 1.18135 127.631 1.54404C143.72 18.8627 157.14 54.4067 167.891 108.176C178.72 161.946 193.068 195.767 210.935 209.64L98.9739 209.776C104.698 203.701 107.56 191.958 107.56 174.549C107.56 163.487 104.118 154.556 97.2336 147.755C93.9076 144.31 90.2723 142.587 86.3275 142.587C82.3054 142.587 77.9739 144.4 73.3331 148.027C63.7419 155.553 58.9463 166.661 58.9463 181.35C58.9463 194.679 65.6756 204.199 79.1342 209.912C70.7806 210.637 63.0844 211 56.0458 211Z"
          className="stroke-text"
        />
      </motion.svg>
      <motion.svg
        key={"e"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.4 } }}
        width="180"
        height="180"
        viewBox="0 0 212 212"
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
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M210.982 211C196.711 206.348 184.393 204.023 174.029 204.023C166.455 204.023 159.917 205.254 154.416 207.716C149.951 209.814 145.327 210.863 140.544 210.863C131.455 210.863 121.848 207.078 111.722 199.508C113.636 203.795 115.788 207.534 118.18 210.726L2.77603 210.863C14.0972 199.189 19.7578 166.081 19.7578 111.541C19.6781 57.0912 13.4195 20.2443 0.982178 1L109.211 1.41042C106.819 6.15309 104.946 13.5407 103.59 23.5733C115.47 8.98045 127.668 1.68404 140.185 1.68404C162.349 1.68404 179.37 5.83387 191.25 14.1335C203.129 22.342 209.069 32.2378 209.069 43.8208C209.069 53.7622 206.198 60.329 200.458 63.5211C165.777 60.2377 148.437 53.6254 148.437 43.684C148.437 35.0195 145.606 27.6319 139.946 21.5212C136.677 18.0554 130.777 16.3225 122.246 16.3225C119.775 16.3225 116.426 17.9642 112.201 21.2475C107.975 24.5309 104.627 31.8273 102.155 43.1368C99.6837 54.4462 98.448 73.9185 98.448 101.554C98.448 103.195 98.8466 104.016 99.6439 104.016C100.999 104.016 105.265 99.2736 112.44 89.7882C119.615 80.2117 129.262 72.7785 141.381 67.4886C144.968 65.9381 148.875 65.1628 153.101 65.1628C163.306 65.1628 175.504 69.5863 189.695 78.4332C199.422 84.5439 204.285 92.1596 204.285 101.28C204.285 111.13 198.704 122.759 187.542 136.166C168.727 114.094 153.778 103.059 142.696 103.059C134.484 103.059 125.834 109.261 116.745 121.664C107.736 133.977 103.232 145.515 103.232 156.277C103.232 163.391 104.109 170.14 105.863 176.524L105.743 175.84C108.294 182.589 111.882 185.964 116.506 185.964C126.552 185.964 144.45 175.019 170.202 153.13C177.058 147.293 183.078 144.375 188.26 144.375C202.451 144.375 210.025 166.583 210.982 211Z"
          className="stroke-text"
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
        width="180"
        height="180"
        viewBox="0 0 212 212"
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
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M138.328 211C124.567 211 114.934 207.212 109.43 199.637C107.909 197.447 106.605 196.352 105.519 196.352C104.722 196.352 104.07 196.899 103.563 197.995C103.201 198.634 103.02 199.364 103.02 200.185C103.02 202.74 104.577 206.3 107.691 210.863L2.85444 211C13.139 199.318 18.2812 166.189 18.2812 111.613C18.2088 57.1277 12.5233 20.2568 1.22485 1L99.5435 1.41069C97.5155 6.97783 95.8135 14.0508 94.4374 22.6297C107.04 8.66623 121.67 1.68448 138.328 1.68448C158.462 1.68448 175.627 11.9061 189.823 32.3494C204.091 52.7927 211.225 77.4341 211.225 106.274C211.225 135.205 204.091 159.892 189.823 180.335C175.627 200.778 158.462 211 138.328 211ZM118.012 192.382C131.773 192.382 138.654 170.341 138.654 126.261C138.654 99.1551 135.286 76.0195 128.55 56.8539C121.815 37.5971 113.703 27.9687 104.215 27.9687C94.5823 27.9687 89.7659 58.4967 89.7659 119.553V125.029C89.8384 165.368 98.0225 187.636 114.318 191.834C115.622 192.199 116.853 192.382 118.012 192.382Z"
          className="stroke-text"
        />
      </motion.svg>
      <motion.svg
        key={"a2"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.4 } }}
        width="180"
        height="180"
        viewBox="0 0 212 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"a2Path"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M71.5927 139.458C78.8634 139.458 85.8248 136.693 92.4767 131.162C98.2004 126.356 101.062 121.732 101.062 117.289L100.946 115.521C96.2281 89.2253 90.2723 66.6476 83.0789 47.7875C67.4546 89.044 59.6425 116.155 59.6425 129.122C59.6425 136.013 63.6259 139.458 71.5927 139.458ZM56.0458 211C19.3055 211 0.935303 201.252 0.935303 181.758C0.935303 179.944 1.09 177.995 1.39939 175.909C5.57618 148.798 20.5044 119.465 46.1839 87.9106C60.648 70.1386 67.88 53.1373 67.88 36.9067C67.88 24.5751 63.7032 12.6515 55.3496 1.13601L103.035 1.40803C107.598 1.13601 111.814 1 115.681 1C120.167 1 124.151 1.18135 127.631 1.54404C143.72 18.8627 157.14 54.4067 167.891 108.176C178.72 161.946 193.068 195.767 210.935 209.64L98.9739 209.776C104.698 203.701 107.56 191.958 107.56 174.549C107.56 163.487 104.118 154.556 97.2336 147.755C93.9076 144.31 90.2723 142.587 86.3275 142.587C82.3054 142.587 77.9739 144.4 73.3331 148.027C63.7419 155.553 58.9463 166.661 58.9463 181.35C58.9463 194.679 65.6756 204.199 79.1342 209.912C70.7806 210.637 63.0844 211 56.0458 211Z"
          className="stroke-text"
        />
      </motion.svg>
      <motion.svg
        key={"n"}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1], transition: { delay: 3.6 } }}
        width="180"
        height="180"
        viewBox="0 0 212 212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          key={"nPath"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1.2 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.8,
          }}
          strokeWidth={1.5}
          strokeDasharray="0 1"
          d="M121.013 211C127.119 192.15 130.172 174.993 130.172 159.529C130.172 142.601 126.489 127.732 119.124 114.922C106.471 92.8692 96.6512 81.8431 89.6638 81.8431C88.8454 81.8431 86.5163 82.6209 82.6764 84.1764C78.8994 85.6405 77.0109 97.7189 77.0109 120.412V125.902C77.0739 150.699 82.2043 179.02 92.4021 210.863L2.41563 211C11.2286 199.47 15.6351 166.667 15.6351 112.588C15.5721 58.6013 10.6935 22.0915 0.999268 3.05882C11.386 1.68627 21.0487 1 29.9876 1C72.2267 1 97.5325 18.3399 105.905 53.0196C114.277 87.6078 121.107 107.327 126.395 112.176C126.898 112.725 127.371 113 127.811 113C129.574 113 130.455 109.203 130.455 101.608C130.455 92.549 129.731 80.9281 128.283 66.7451C126.836 52.4706 122.87 38.1046 116.386 23.647C122.87 9.73856 146.665 2.78431 187.771 2.78431C192.87 2.78431 198.283 3.01307 204.012 3.47059C198.409 21.1307 195.608 61.9411 195.608 125.902C195.671 150.699 200.801 179.02 210.999 210.863L121.013 211Z"
          className="stroke-text"
        />
      </motion.svg>
    </div>
  );
};

export default Name;
