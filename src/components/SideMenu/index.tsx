import Image from "next/image";
import Link from "next/link";
import { Container, MenuItems } from "./styles";

import logo from "../../assets/logo.svg";
import debit from "../../assets/debit.png";
import receipt from "../../assets/receipt.png";
import debitCategories from "../../assets/debitCategories.png";
import receiptCategories from "../../assets/receiptCategories.png";

const menuItems = [
	{
		href: "/Debit",
		src: debit,
		alt: "debit",
		title: "Débito",
	},
	{
		href: "/Receipt",
		src: receipt,
		alt: "receipt",
		title: "Receita",
	},
	{
		href: "/DebitCategories",
		src: debitCategories,
		alt: "debit categories",
		title: "Categorias de débito",
	},
	{
		href: "/ReceiptCategories",
		src: receiptCategories,
		alt: "receipt categories",
		title: "Categorias de receita",
	},
];

const SideMenu = () => {
	return (
		<Container>
			<Link href="/">
				<Image
					src={logo}
					alt="GoFinance"
					title="GoFinance | Suas finanças em um só lugar."
					width={60}
				/>
			</Link>
			<MenuItems>
				{menuItems.map((menuItem) => (
					<Link key={menuItem.href} href={menuItem.href}>
						<Image
							src={menuItem.src}
							alt={menuItem.alt}
							title={menuItem.title}
							width={41}
						/>
					</Link>
				))}
			</MenuItems>
		</Container>
	);
};

export default SideMenu;
