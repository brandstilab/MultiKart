import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import NoSsr from "../../Utils/HOC/NoSsr";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import AnswerModal from "../Q&A/Widgets/AnswerModal";
import DeleteButton from "./DeleteButton";
import ViewDetails from "./ViewDetails";

const Options = ({ fullObj, mutate, type, moduleName, optionPermission, refetch, keyInPermission }) => {
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"], keyInPermission ?? keyInPermission);
  return (
    <div className="custom-ul">
      <NoSsr>
        {optionPermission?.optionHead.type == "View" ? (
          <ViewDetails fullObj={fullObj} tableData={optionPermission?.optionHead} refetch={refetch} />
        ) : (
          <>
            <div>
              {keyInPermission == "question_and_answer" && edit ? (
                <a onClick={() => setModal(true)}>
                  <RiPencilLine />
                </a>
              ) : (
                edit &&
                fullObj?.id &&
                !optionPermission?.noEdit && (
                  <>
                    {optionPermission?.editRedirect ? (
                      <Link href={`/` + optionPermission?.editRedirect + "/edit/" + fullObj.id}>
                        <RiPencilLine />
                      </Link>
                    ) : type == "post" && moduleName?.toLowerCase() == "tag" ? (
                      <Link href={`/${pathname.split("/")[1]}/tag/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                    ) : type == "post" ? (
                      <Link href={`/${pathname.split("/")[1]}/category/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                    ) : (
                      
                      
                      <Link href={`/${pathname.split("/")[1]}/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                    )}
                  </>
                )
              )}
            </div>
            <div>{destroy && !optionPermission?.noDelete && <DeleteButton id={fullObj?.id} mutate={mutate} />}</div>
          </>
        )}
        {modal && <AnswerModal fullObj={fullObj} modal={modal} setModal={setModal} />}
      </NoSsr>
    </div>
  );
};

export default Options;
