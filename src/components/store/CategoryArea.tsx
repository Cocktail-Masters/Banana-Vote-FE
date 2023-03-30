/**
 * @author mingyu
 */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { Dispatch } from "react";
import CategoryItem from "./CategoryItem";

type categoryAreaProps = {
  currentCategory: number;
  setCurrentCategory: Dispatch<React.SetStateAction<number>>;
  categories: categories[];
};

type categories = {
  id: number;
  label: string;
};

const CategoryArea = ({
  currentCategory,
  setCurrentCategory,
  categories,
}: categoryAreaProps) => {
  return (
    <div className="relative mt-5 flex h-12 w-full items-start border-b-2 border-inherit">
      {/* 메뉴 요소들 */}
      {categories.map((item: categories) => {
        return (
          <CategoryItem
            key={item.id}
            label={item.label}
            id={item.id}
            setCurrentCategory={setCurrentCategory}
          />
        );
      })}
      {/* 메뉴를 덮는 주황색 배경 */}
      <AnimatePresence>
        {currentCategory !== null && (
          <motion.div
            key="background"
            className="absolute left-0 z-10 h-12 w-24 rounded-t-2xl bg-secondary-orange/75 "
            initial={{ x: 0 }}
            animate={{
              x: currentCategory * 96 + currentCategory * 8, // width(24) + marginRight(2)
            }}
            transition={{ ease: "linear", duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryArea;
