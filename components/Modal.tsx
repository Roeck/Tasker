"use client";

import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef, useState } from "react";

import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useBoardStore } from "@/store/BoardStore";
import { useModalStore } from "@/store/ModalStore";

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);

  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    // Use the `Transition` component at the root level
    <Transition appear as={Fragment}>
      <Dialog as="form" onSubmit={handleSubmit} className="relative z-10">
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* <div className="fixed inset-0 bg-black bg-opacity-25"></div> */}
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 pb-2"
                >
                  Add a Task
                </Dialog.Title>

                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Enter a task here..."
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  />
                </div>
                {/* <TaskTypeRadioGroup /> */}

                {/* Upload Image Button */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
