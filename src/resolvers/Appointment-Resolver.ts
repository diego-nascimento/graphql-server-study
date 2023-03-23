import { Arg,  FieldResolver,  Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointmet-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(() => Appointment)
export class AppoitmentResolver {
  @Query(() => [Appointment])
  async appointments() {
    return []
  }

  @Mutation(() => Appointment)
  async createAppoitment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      starsAt: data.startsAt,
      endsAt: data.endsAt
    }
    return appointment
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment){
      return {
        name: 'Diego Nasicmento'
      }
  }
}