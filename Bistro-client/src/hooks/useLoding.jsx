import { useEffect, useState } from "react";

const useLoding = () => {
      const [pageLoading, setPageLoading] = useState(true);

      useEffect(() => {
            setTimeout(() => {
                  setPageLoading(false)
            }, 1500);
      }, [])
      return pageLoading;
}

export default useLoding