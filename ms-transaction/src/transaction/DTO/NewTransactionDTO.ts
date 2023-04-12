import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewTransactionDTO {
	@Field()
	accountExternalIdDebit: string;
	@Field()
	accountExternalIdCredit: string;
	
	@Field((type) => Int)
	tranferTypeId: number;

	@Field((type) => Int)
	value: number;
}