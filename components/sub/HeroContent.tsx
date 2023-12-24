"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { motion } from "framer-motion";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300">
              {" "}
              the best{" "}
            </span>
            fest exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        ></motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Button
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-300"
            onPress={onOpen}
          >
            Learn More
          </Button>
          <Modal
            className="bg-blueGray-900"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className="flex ">
                    <div className="flex flex-col">
                      <Button
                        className="text-white w-fit items-center"
                        color="danger"
                        variant="light"
                        onPress={onClose}
                      >
                        X
                      </Button>
                      <img
                        className=" h-screen w-screen"
                        src="/datamaze.png"
                        alt=""
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
