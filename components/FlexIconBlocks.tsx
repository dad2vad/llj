import { IconBlock } from "./IconBlock.tsx";
import { IconBlockMarkups } from "../routes/index.tsx";

export interface FlexIconBlocksProps {
  // takes only keys (icons) that exist in `IconBlockMarkups`
  iconNames: (keyof typeof IconBlockMarkups)[];
}

export function FlexIconBlocks({ iconNames }: FlexIconBlocksProps) {
  {
    return (
      <div class="flex flex-wrap gap-1">
        {
          // create `IconBlock` for each passed icon
          iconNames.map((x) => (
            <IconBlock text={x as string} src={IconBlockMarkups[x]} />
          ))
        }
      </div>
    );
  }
}
