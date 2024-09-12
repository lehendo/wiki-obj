import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';

const CardContainer = ({ cards }) => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="relative w-full h-screen">
            <AnimatePresence>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        layoutId={card.id}
                        onClick={() => setSelectedId(card.id)}
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: selectedId && selectedId !== card.id ? 0.5 : 1,
                            scale: selectedId && selectedId !== card.id ? 0.95 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="cursor-pointer"
                    >
                        <Card {...card} />
                    </motion.div>
                ))}
            </AnimatePresence>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    >
                        <motion.div
                            className="bg-white rounded-lg p-4 w-2/3 max-w-2xl"
                            layoutId={`card-${selectedId}`}
                        >
                            <Card {...cards.find(card => card.id === selectedId)} />
                            <motion.button
                                onClick={() => setSelectedId(null)}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardContainer;