import ContentLoader from "react-content-loader";

export const HeroSkeleton = ({ className }) => (
  <ContentLoader
    style={{ width: "100%", height: "100%" }}
    className={className}
    speed={2}
    width={1920}
    height={800}
    viewBox="0 0 1920 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="340" y="150" rx="4" ry="4" width="170" height="15" />
    <rect x="340" y="205" rx="0" ry="0" width="530" height="55" />
    <rect x="340" y="335" rx="4" ry="4" width="155" height="55" />
    <rect x="520" y="335" rx="4" ry="4" width="230" height="55" />

    <rect x="340" y="570" rx="4" ry="4" width="190" height="60" />
    <rect x="540" y="570" rx="4" ry="4" width="190" height="60" />
    <rect x="740" y="570" rx="4" ry="4" width="190" height="60" />
    <rect x="940" y="570" rx="4" ry="4" width="190" height="60" />
  </ContentLoader>
);
