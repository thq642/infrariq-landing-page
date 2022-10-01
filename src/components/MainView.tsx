interface MainViewProps {
  name: string;
  bio: string;
}

function MainView({ data }: { data: MainViewProps }) {
  const { name, bio } = data;
  return (
    <div class="flex flex-col">
      <div class="text-white lg:text-[60px] md:text-[40px] sm:text-[30px]">
        {name}
      </div>
      <div class="text-primary text-bold">{bio}</div>
    </div>
  );
}

export default MainView;
