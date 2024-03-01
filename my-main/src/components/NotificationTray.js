import { motion, AnimatePresence } from "framer-motion";

const NotificationTray = ({
    notificationContent,
    handleDeleteNotification,
  }) => {
    return (
      <motion.div className="notification__tray" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} exit={{ opacity: 0, x: "-12rem" }}>
        <ul>
        <AnimatePresence>
          {notificationContent.map((content) => {
            return (
              <motion.li key={content} initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ x: "-12rem", opacity: 0 }}
          layout>
                <span>{content}</span>
                <span
                  className="clear__button"
                  onClick={() => {
                    handleDeleteNotification(content);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="clear__icon"
                    title="Clear notification"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
        </ul>
      </motion.div>
    );
  };
  export default NotificationTray;
  