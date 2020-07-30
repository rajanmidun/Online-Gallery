import React from 'react';
import useFireStore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImagesGrid = ({ setSelectedImage }) => {
  const { docs } = useFireStore('images');
  console.log(docs);
  return (
    <div className='img-grid'>
      {docs && docs.map(doc => {
        return <motion.div
          // for some cool effects using framer-motion
          whileHover={{ opacity: 1 }}
          layout
          className='img-wrap'
          key={doc.id}
          onClick={() => setSelectedImage(doc.url)}
        >
          <motion.img
            src={doc.url}
            alt='uploaded_pic'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      })}
    </div>
  )
}

export default ImagesGrid
