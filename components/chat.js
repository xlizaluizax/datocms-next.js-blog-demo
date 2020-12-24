import Container from "./container";

export default function Chat() {
  return (
    <chat>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <input
            class="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
            type="text"
            name="name"
            placeholder="Inserisci il tuo nickname per entrare nella chat"
          >
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a
                href="http://turbo24.org/chat-gay-adj"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Inizia la chat
              </a>
            </div>
          </input>
        </div>
      </Container>
    </chat>
  );
}
