export default {
  toggleContainerVisibility: () => {
    // Lấy trạng thái hiện tại của container từ store
		const visible = Container5.isVisible;
    Container5.setVisibility(!visible);
  },
	showChat: () => {
		ShowChatIcon.setVisibility(false);
		Container5.setVisibility(true);
	},
	hiddenChat: () =>{
		ShowChatIcon.setVisibility(true);
		Container5.setVisibility(false);
	}
}
