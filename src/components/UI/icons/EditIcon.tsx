interface EditIconProps {
    color?: string;
    width?: string;
    height?: string;
}

const EditIcon = ({color, width, height}: EditIconProps) => {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_28_6528)">
        <path
          d="M14.1666 2.49999C14.3855 2.28113 14.6453 2.10751 14.9313 1.98906C15.2173 1.87061 15.5238 1.80964 15.8333 1.80964C16.1428 1.80964 16.4493 1.87061 16.7353 1.98906C17.0213 2.10751 17.2811 2.28113 17.5 2.49999C17.7188 2.71886 17.8924 2.9787 18.0109 3.26467C18.1294 3.55064 18.1903 3.85713 18.1903 4.16666C18.1903 4.47619 18.1294 4.78269 18.0109 5.06866C17.8924 5.35462 17.7188 5.61446 17.5 5.83333L6.24996 17.0833L1.66663 18.3333L2.91663 13.75L14.1666 2.49999Z"
          stroke={color || "#FF7A66"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_6528">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default EditIcon;
