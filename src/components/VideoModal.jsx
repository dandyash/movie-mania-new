import { Dialog, Transition } from "@headlessui/react";
import { YOUTUBE_URL } from "../utils";

const VideoModal = ({ isOpen, hideModal, videoKey }) => {

  return (
    <Transition.Root show={isOpen}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={hideModal}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black/70 overflow-hidden">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative w-full flex items-center justify-center transition-all">
              <div className="w-[50vw] dark:bg-black bg-white aspect-video overflow-hidden rounded-lg">
                <iframe title="Youtube Video Player" src={YOUTUBE_URL(videoKey) + "?autoplay=1"} width={'100%'} height={'100%'} allow="autoplay;" allowFullScreen></iframe>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default VideoModal;