import { user } from "@/utils/backend";
import styles from "./page.module.css";
import { Table, TableRow } from "@/components/table/view";

export default async function ManageStudents() {
  const res = await user.getAll();
  
  if (!res?.payload) {
    return (
      <div id="studentsConsole" className={styles.page}>
        <header>
          <h3>Student details</h3>
        </header>
        No users found
      </div>
    );
  }

  const users = res.payload;

  return (
    <div id="studentsConsole" className={styles.page}>
      <header>
        <h3>Student details</h3>
      </header>
      <Table
        columns={[
          "Id",
          "Full Name",
          "Age",
          "Email",
          "Mobile no",
          "Address",
          "Profile pic",
          "Role",
          "Status",
          "Created at",
          "Updated at",
        ]}
      >
        {users.map(
          (
            {
              id,
              Full_name,
              Age,
              Email,
              Mobile_No,
              Address,
              Profile_Picture,
              Role,
              Status,
              created_at,
              updated_at,
            },
            index
          ) => (
               (
                <TableRow
                  key={index}
                  values={[
                    id,
                    Full_name,
                    Age,
                    Email,
                    Mobile_No,
                    Address,
                    Profile_Picture,
                    Role,
                    Status,
                    created_at,
                    updated_at,
                  ]}
                />
              )
            )
        )}
      </Table>
    </div>
  );
}
