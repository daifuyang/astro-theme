import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-secondary fixed t-0 w-full z-10">
      <div className="container flex items-center justify-between mx-auto px-3 md:px-6 lg:px-8 xl:w-[1300px]、md:w-[970px]、sm:w-[750px] h-[56px]">
        <div>logo</div>
        <div>
          <div className="flex w-[600px] h-[36px] bg-[#f3f5f6] rounded-lg m-[10px]">
            <input
              placeholder="搜索感兴趣的知识和文章"
              className="w-full h-full px-4 py-2 text-sm bg-transparent color-[#9199a1]"
            />
            <div className="flex items-center">
              <MagnifyingGlassIcon className="h-6 px-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-t-[rgba(0, 0, 0, .05)]">
        <div className="flex-1">

        </div>
        <div>
            
        </div>
      </div>
    </header>
  );
};

export default Header;
