import { VeltCommentsSidebarWireframe } from '@veltdev/react';

const VeltEmptyPlaceholder = () => {
  return <svg width="67" height="64" viewBox="0 0 67 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.5"
      d="M1.68211 43.0856L1.66482 43.0775L1.64714 43.0702C1.38288 42.9617 1.15668 42.7773 0.997024 42.5404C0.837684 42.304 0.751754 42.0258 0.75 41.7407V6.59096C0.75 5.04184 1.36539 3.55617 2.46079 2.46078C3.5562 1.36539 5.04189 0.75 6.59103 0.75H37.3492C38.8983 0.75 40.384 1.36539 41.4794 2.46078C42.5748 3.55617 43.1902 5.04184 43.1902 6.59096V20.0597V20.8097H43.9402H60.3942C61.9434 20.8097 63.4291 21.425 64.5245 22.5204C65.6199 23.6158 66.2353 25.1015 66.2353 26.6506L66.2353 61.7987C66.2353 61.7991 66.2353 61.7996 66.2353 61.8C66.2336 62.0852 66.1476 62.3636 65.9882 62.6001C65.8286 62.837 65.6024 63.0213 65.3381 63.1299L65.3204 63.1371L65.3031 63.1453C65.1484 63.2183 64.9786 63.254 64.8075 63.2496L64.7957 63.2493L64.7839 63.2494C64.5935 63.2505 64.4047 63.214 64.2284 63.142C64.0527 63.0702 63.8927 62.9645 63.7578 62.831C63.7574 62.8306 63.757 62.8302 63.7565 62.8298L55.6305 54.6818L55.4107 54.4614H55.0994H29.6361C28.0869 54.4614 26.6012 53.8461 25.5058 52.7507C24.4104 51.6553 23.795 50.1696 23.795 48.6205V35.1518V34.4018H23.045H11.8858H11.5746L11.3548 34.6222L3.22872 42.7701C3.2283 42.7705 3.22788 42.7709 3.22746 42.7714C3.09252 42.9049 2.93262 43.0105 2.75687 43.0823C2.58057 43.1543 2.39179 43.1908 2.20134 43.1897L2.18951 43.1897L2.17769 43.19C2.00662 43.1944 1.83689 43.1587 1.68211 43.0856ZM39.5462 20.8097H40.2962V20.0597V6.59096C40.2962 5.80937 39.9857 5.05979 39.433 4.50712C38.8804 3.95446 38.1308 3.64397 37.3492 3.64397H6.59103C5.80944 3.64397 5.05985 3.95446 4.50718 4.50712C3.95451 5.05979 3.64402 5.80937 3.64402 6.59096V36.448V38.2642L4.9255 36.9772L9.95334 31.9274C9.95383 31.9269 9.95431 31.9265 9.9548 31.926C10.0897 31.7926 10.2495 31.687 10.4252 31.6152C10.6015 31.5432 10.7903 31.5067 10.9807 31.5078H10.9851H23.045H23.795V30.7578V26.6506C23.795 25.1015 24.4104 23.6158 25.5058 22.5204C26.6012 21.425 28.0869 20.8097 29.6361 20.8097H39.5462ZM26.6891 30.7578V31.5078H27.4391H37.3492C38.1308 31.5078 38.8804 31.1973 39.433 30.6447C39.9857 30.092 40.2962 29.3424 40.2962 28.5608V24.4536V23.7036H39.5462H29.6361C28.8545 23.7036 28.1049 24.0141 27.5522 24.5668C26.9996 25.1194 26.6891 25.869 26.6891 26.6506V30.7578ZM27.4391 34.4018H26.6891V35.1518V48.6205C26.6891 49.4021 26.9996 50.1517 27.5522 50.7043C28.1049 51.257 28.8545 51.5675 29.6361 51.5675L56.0002 51.5675L56.0045 51.5675C56.195 51.5664 56.3838 51.6029 56.5601 51.6749C56.7357 51.7466 56.8955 51.8521 57.0303 51.9855C57.0309 51.986 57.0314 51.9866 57.0319 51.9871L62.0597 57.0368L63.3412 58.3239V56.5077V26.6506C63.3412 25.869 63.0307 25.1195 62.4781 24.5668C61.9254 24.0141 61.1758 23.7036 60.3942 23.7036H43.9402H43.1902V24.4536V28.5608C43.1902 30.1099 42.5748 31.5956 41.4794 32.691C40.384 33.7864 38.8983 34.4018 37.3492 34.4018H27.4391Z"
      fill="#949DAD"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>;
};

const VeltCommentsSidebarEmptyPlaceholder = () => {
  return (
    <VeltCommentsSidebarWireframe.EmptyPlaceholder>
      <div
        className="flex items-center justify-center flex-col w-full h-full gap-2 text-gray-500 font-inter text-xs font-medium leading-4 text-center"
      >
        <VeltEmptyPlaceholder />
        <p>No comments to display</p>
        <VeltCommentsSidebarWireframe.ResetFilterButton />
      </div>
    </VeltCommentsSidebarWireframe.EmptyPlaceholder>
  );
};

export default VeltCommentsSidebarEmptyPlaceholder;