import type { ReactNode } from 'react';

import { useState } from 'react';

const Tooltip = ({ children, text }: { children: ReactNode; text: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      <div className={`${!show && 'hidden'} shadow-md z-50 bg-white absolute top-8 text-xs p-2 w-36 rounded-md`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
