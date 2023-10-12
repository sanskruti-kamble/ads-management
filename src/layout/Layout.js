import Header from "./Header";

export default function Layout(props) {
  return (
    <section className="my-layout d-flex flex-column">
      <Header />
      <section
        className="dashboard-container p-3 d-flex flex-column"
        style={{ flex: 1 }}
      >
        {props.children}
      </section>
    </section>
  );
}
